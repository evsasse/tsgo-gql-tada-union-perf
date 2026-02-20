import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1652 } from "./fragment1652";
import type { FragmentToken1653 } from "./fragment1653";

export const FRAGMENT_1654 = gql(`
  fragment Fragment1654 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult1654 = ResultOf<typeof FRAGMENT_1654>;
type FragmentSelf1654 = NonNullable<FragmentResult1654>;

export type FragmentToken1654 =
  | FragmentSelf1654["__typename"]
  | FragmentSelf1654["typenameHint"] | FragmentToken1652 | FragmentToken1653;
