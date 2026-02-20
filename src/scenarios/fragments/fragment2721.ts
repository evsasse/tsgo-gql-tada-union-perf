import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2719 } from "./fragment2719";
import type { FragmentToken2720 } from "./fragment2720";

export const FRAGMENT_2721 = gql(`
  fragment Fragment2721 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult2721 = ResultOf<typeof FRAGMENT_2721>;
type FragmentSelf2721 = NonNullable<FragmentResult2721>;

export type FragmentToken2721 =
  | FragmentSelf2721["__typename"]
  | FragmentSelf2721["typenameHint"] | FragmentToken2719 | FragmentToken2720;
