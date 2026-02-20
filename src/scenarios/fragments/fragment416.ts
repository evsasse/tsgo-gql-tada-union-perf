import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken414 } from "./fragment414";
import type { FragmentToken415 } from "./fragment415";

export const FRAGMENT_416 = gql(`
  fragment Fragment416 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult416 = ResultOf<typeof FRAGMENT_416>;
type FragmentSelf416 = NonNullable<FragmentResult416>;

export type FragmentToken416 =
  | FragmentSelf416["__typename"]
  | FragmentSelf416["typenameHint"] | FragmentToken414 | FragmentToken415;
