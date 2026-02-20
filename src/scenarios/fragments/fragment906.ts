import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken904 } from "./fragment904";
import type { FragmentToken905 } from "./fragment905";

export const FRAGMENT_906 = gql(`
  fragment Fragment906 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult906 = ResultOf<typeof FRAGMENT_906>;
type FragmentSelf906 = NonNullable<FragmentResult906>;

export type FragmentToken906 =
  | FragmentSelf906["__typename"]
  | FragmentSelf906["typenameHint"] | FragmentToken904 | FragmentToken905;
