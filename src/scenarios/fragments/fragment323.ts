import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken321 } from "./fragment321";
import type { FragmentToken322 } from "./fragment322";

export const FRAGMENT_323 = gql(`
  fragment Fragment323 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult323 = ResultOf<typeof FRAGMENT_323>;
type FragmentSelf323 = NonNullable<FragmentResult323>;

export type FragmentToken323 =
  | FragmentSelf323["__typename"]
  | FragmentSelf323["typenameHint"] | FragmentToken321 | FragmentToken322;
