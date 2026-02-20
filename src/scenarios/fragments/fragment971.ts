import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken969 } from "./fragment969";
import type { FragmentToken970 } from "./fragment970";

export const FRAGMENT_971 = gql(`
  fragment Fragment971 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult971 = ResultOf<typeof FRAGMENT_971>;
type FragmentSelf971 = NonNullable<FragmentResult971>;

export type FragmentToken971 =
  | FragmentSelf971["__typename"]
  | FragmentSelf971["typenameHint"] | FragmentToken969 | FragmentToken970;
