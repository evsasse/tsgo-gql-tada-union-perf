import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4938 } from "./fragment4938";
import type { FragmentToken4939 } from "./fragment4939";

export const FRAGMENT_4940 = gql(`
  fragment Fragment4940 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult4940 = ResultOf<typeof FRAGMENT_4940>;
type FragmentSelf4940 = NonNullable<FragmentResult4940>;

export type FragmentToken4940 =
  | FragmentSelf4940["__typename"]
  | FragmentSelf4940["typenameHint"] | FragmentToken4938 | FragmentToken4939;
