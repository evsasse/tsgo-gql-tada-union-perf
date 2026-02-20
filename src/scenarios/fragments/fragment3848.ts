import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3846 } from "./fragment3846";
import type { FragmentToken3847 } from "./fragment3847";

export const FRAGMENT_3848 = gql(`
  fragment Fragment3848 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult3848 = ResultOf<typeof FRAGMENT_3848>;
type FragmentSelf3848 = NonNullable<FragmentResult3848>;

export type FragmentToken3848 =
  | FragmentSelf3848["__typename"]
  | FragmentSelf3848["typenameHint"] | FragmentToken3846 | FragmentToken3847;
