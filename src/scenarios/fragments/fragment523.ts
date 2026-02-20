import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken521 } from "./fragment521";
import type { FragmentToken522 } from "./fragment522";

export const FRAGMENT_523 = gql(`
  fragment Fragment523 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult523 = ResultOf<typeof FRAGMENT_523>;
type FragmentSelf523 = NonNullable<FragmentResult523>;

export type FragmentToken523 =
  | FragmentSelf523["__typename"]
  | FragmentSelf523["typenameHint"] | FragmentToken521 | FragmentToken522;
