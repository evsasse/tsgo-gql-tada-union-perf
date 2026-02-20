import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2846 } from "./fragment2846";
import type { FragmentToken2847 } from "./fragment2847";

export const FRAGMENT_2848 = gql(`
  fragment Fragment2848 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult2848 = ResultOf<typeof FRAGMENT_2848>;
type FragmentSelf2848 = NonNullable<FragmentResult2848>;

export type FragmentToken2848 =
  | FragmentSelf2848["__typename"]
  | FragmentSelf2848["typenameHint"] | FragmentToken2846 | FragmentToken2847;
