import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2980 } from "./fragment2980";
import type { FragmentToken2981 } from "./fragment2981";

export const FRAGMENT_2982 = gql(`
  fragment Fragment2982 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult2982 = ResultOf<typeof FRAGMENT_2982>;
type FragmentSelf2982 = NonNullable<FragmentResult2982>;

export type FragmentToken2982 =
  | FragmentSelf2982["__typename"]
  | FragmentSelf2982["typenameHint"] | FragmentToken2980 | FragmentToken2981;
