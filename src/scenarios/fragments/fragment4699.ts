import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4697 } from "./fragment4697";
import type { FragmentToken4698 } from "./fragment4698";

export const FRAGMENT_4699 = gql(`
  fragment Fragment4699 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult4699 = ResultOf<typeof FRAGMENT_4699>;
type FragmentSelf4699 = NonNullable<FragmentResult4699>;

export type FragmentToken4699 =
  | FragmentSelf4699["__typename"]
  | FragmentSelf4699["typenameHint"] | FragmentToken4697 | FragmentToken4698;
