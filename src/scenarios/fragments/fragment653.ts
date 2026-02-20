import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken651 } from "./fragment651";
import type { FragmentToken652 } from "./fragment652";

export const FRAGMENT_653 = gql(`
  fragment Fragment653 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult653 = ResultOf<typeof FRAGMENT_653>;
type FragmentSelf653 = NonNullable<FragmentResult653>;

export type FragmentToken653 =
  | FragmentSelf653["__typename"]
  | FragmentSelf653["typenameHint"] | FragmentToken651 | FragmentToken652;
