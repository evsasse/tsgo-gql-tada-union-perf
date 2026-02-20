import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken508 } from "./fragment508";
import type { FragmentToken509 } from "./fragment509";

export const FRAGMENT_510 = gql(`
  fragment Fragment510 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult510 = ResultOf<typeof FRAGMENT_510>;
type FragmentSelf510 = NonNullable<FragmentResult510>;

export type FragmentToken510 =
  | FragmentSelf510["__typename"]
  | FragmentSelf510["typenameHint"] | FragmentToken508 | FragmentToken509;
