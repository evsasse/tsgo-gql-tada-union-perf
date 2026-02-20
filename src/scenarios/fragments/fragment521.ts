import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken519 } from "./fragment519";
import type { FragmentToken520 } from "./fragment520";

export const FRAGMENT_521 = gql(`
  fragment Fragment521 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult521 = ResultOf<typeof FRAGMENT_521>;
type FragmentSelf521 = NonNullable<FragmentResult521>;

export type FragmentToken521 =
  | FragmentSelf521["__typename"]
  | FragmentSelf521["typenameHint"] | FragmentToken519 | FragmentToken520;
