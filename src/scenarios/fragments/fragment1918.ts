import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1916 } from "./fragment1916";
import type { FragmentToken1917 } from "./fragment1917";

export const FRAGMENT_1918 = gql(`
  fragment Fragment1918 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult1918 = ResultOf<typeof FRAGMENT_1918>;
type FragmentSelf1918 = NonNullable<FragmentResult1918>;

export type FragmentToken1918 =
  | FragmentSelf1918["__typename"]
  | FragmentSelf1918["typenameHint"] | FragmentToken1916 | FragmentToken1917;
