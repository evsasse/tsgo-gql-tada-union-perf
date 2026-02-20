import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2726 } from "./fragment2726";
import type { FragmentToken2727 } from "./fragment2727";

export const FRAGMENT_2728 = gql(`
  fragment Fragment2728 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult2728 = ResultOf<typeof FRAGMENT_2728>;
type FragmentSelf2728 = NonNullable<FragmentResult2728>;

export type FragmentToken2728 =
  | FragmentSelf2728["__typename"]
  | FragmentSelf2728["typenameHint"] | FragmentToken2726 | FragmentToken2727;
