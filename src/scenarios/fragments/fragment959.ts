import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken957 } from "./fragment957";
import type { FragmentToken958 } from "./fragment958";

export const FRAGMENT_959 = gql(`
  fragment Fragment959 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult959 = ResultOf<typeof FRAGMENT_959>;
type FragmentSelf959 = NonNullable<FragmentResult959>;

export type FragmentToken959 =
  | FragmentSelf959["__typename"]
  | FragmentSelf959["typenameHint"] | FragmentToken957 | FragmentToken958;
