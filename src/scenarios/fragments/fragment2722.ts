import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2720 } from "./fragment2720";
import type { FragmentToken2721 } from "./fragment2721";

export const FRAGMENT_2722 = gql(`
  fragment Fragment2722 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult2722 = ResultOf<typeof FRAGMENT_2722>;
type FragmentSelf2722 = NonNullable<FragmentResult2722>;

export type FragmentToken2722 =
  | FragmentSelf2722["__typename"]
  | FragmentSelf2722["typenameHint"] | FragmentToken2720 | FragmentToken2721;
