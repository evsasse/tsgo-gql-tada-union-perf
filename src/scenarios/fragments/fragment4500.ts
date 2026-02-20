import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4498 } from "./fragment4498";
import type { FragmentToken4499 } from "./fragment4499";

export const FRAGMENT_4500 = gql(`
  fragment Fragment4500 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult4500 = ResultOf<typeof FRAGMENT_4500>;
type FragmentSelf4500 = NonNullable<FragmentResult4500>;

export type FragmentToken4500 =
  | FragmentSelf4500["__typename"]
  | FragmentSelf4500["typenameHint"] | FragmentToken4498 | FragmentToken4499;
