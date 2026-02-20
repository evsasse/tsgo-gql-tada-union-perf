import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken670 } from "./fragment670";
import type { FragmentToken671 } from "./fragment671";

export const FRAGMENT_672 = gql(`
  fragment Fragment672 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult672 = ResultOf<typeof FRAGMENT_672>;
type FragmentSelf672 = NonNullable<FragmentResult672>;

export type FragmentToken672 =
  | FragmentSelf672["__typename"]
  | FragmentSelf672["typenameHint"] | FragmentToken670 | FragmentToken671;
