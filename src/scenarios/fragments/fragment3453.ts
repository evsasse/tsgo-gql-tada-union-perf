import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3451 } from "./fragment3451";
import type { FragmentToken3452 } from "./fragment3452";

export const FRAGMENT_3453 = gql(`
  fragment Fragment3453 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult3453 = ResultOf<typeof FRAGMENT_3453>;
type FragmentSelf3453 = NonNullable<FragmentResult3453>;

export type FragmentToken3453 =
  | FragmentSelf3453["__typename"]
  | FragmentSelf3453["typenameHint"] | FragmentToken3451 | FragmentToken3452;
