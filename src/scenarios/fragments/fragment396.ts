import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken394 } from "./fragment394";
import type { FragmentToken395 } from "./fragment395";

export const FRAGMENT_396 = gql(`
  fragment Fragment396 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult396 = ResultOf<typeof FRAGMENT_396>;
type FragmentSelf396 = NonNullable<FragmentResult396>;

export type FragmentToken396 =
  | FragmentSelf396["__typename"]
  | FragmentSelf396["typenameHint"] | FragmentToken394 | FragmentToken395;
