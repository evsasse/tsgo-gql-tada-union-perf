import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken340 } from "./fragment340";
import type { FragmentToken341 } from "./fragment341";

export const FRAGMENT_342 = gql(`
  fragment Fragment342 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult342 = ResultOf<typeof FRAGMENT_342>;
type FragmentSelf342 = NonNullable<FragmentResult342>;

export type FragmentToken342 =
  | FragmentSelf342["__typename"]
  | FragmentSelf342["typenameHint"] | FragmentToken340 | FragmentToken341;
