import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken440 } from "./fragment440";
import type { FragmentToken441 } from "./fragment441";

export const FRAGMENT_442 = gql(`
  fragment Fragment442 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult442 = ResultOf<typeof FRAGMENT_442>;
type FragmentSelf442 = NonNullable<FragmentResult442>;

export type FragmentToken442 =
  | FragmentSelf442["__typename"]
  | FragmentSelf442["typenameHint"] | FragmentToken440 | FragmentToken441;
