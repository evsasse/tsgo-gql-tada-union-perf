import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken451 } from "./fragment451";
import type { FragmentToken452 } from "./fragment452";

export const FRAGMENT_453 = gql(`
  fragment Fragment453 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult453 = ResultOf<typeof FRAGMENT_453>;
type FragmentSelf453 = NonNullable<FragmentResult453>;

export type FragmentToken453 =
  | FragmentSelf453["__typename"]
  | FragmentSelf453["typenameHint"] | FragmentToken451 | FragmentToken452;
