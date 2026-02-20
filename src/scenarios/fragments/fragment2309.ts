import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2307 } from "./fragment2307";
import type { FragmentToken2308 } from "./fragment2308";

export const FRAGMENT_2309 = gql(`
  fragment Fragment2309 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult2309 = ResultOf<typeof FRAGMENT_2309>;
type FragmentSelf2309 = NonNullable<FragmentResult2309>;

export type FragmentToken2309 =
  | FragmentSelf2309["__typename"]
  | FragmentSelf2309["typenameHint"] | FragmentToken2307 | FragmentToken2308;
