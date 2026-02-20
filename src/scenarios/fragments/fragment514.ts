import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken512 } from "./fragment512";
import type { FragmentToken513 } from "./fragment513";

export const FRAGMENT_514 = gql(`
  fragment Fragment514 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult514 = ResultOf<typeof FRAGMENT_514>;
type FragmentSelf514 = NonNullable<FragmentResult514>;

export type FragmentToken514 =
  | FragmentSelf514["__typename"]
  | FragmentSelf514["typenameHint"] | FragmentToken512 | FragmentToken513;
