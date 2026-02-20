import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4669 } from "./fragment4669";
import type { FragmentToken4670 } from "./fragment4670";

export const FRAGMENT_4671 = gql(`
  fragment Fragment4671 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult4671 = ResultOf<typeof FRAGMENT_4671>;
type FragmentSelf4671 = NonNullable<FragmentResult4671>;

export type FragmentToken4671 =
  | FragmentSelf4671["__typename"]
  | FragmentSelf4671["typenameHint"] | FragmentToken4669 | FragmentToken4670;
