import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken914 } from "./fragment914";
import type { FragmentToken915 } from "./fragment915";

export const FRAGMENT_916 = gql(`
  fragment Fragment916 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult916 = ResultOf<typeof FRAGMENT_916>;
type FragmentSelf916 = NonNullable<FragmentResult916>;

export type FragmentToken916 =
  | FragmentSelf916["__typename"]
  | FragmentSelf916["typenameHint"] | FragmentToken914 | FragmentToken915;
