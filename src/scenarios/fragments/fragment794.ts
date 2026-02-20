import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken792 } from "./fragment792";
import type { FragmentToken793 } from "./fragment793";

export const FRAGMENT_794 = gql(`
  fragment Fragment794 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult794 = ResultOf<typeof FRAGMENT_794>;
type FragmentSelf794 = NonNullable<FragmentResult794>;

export type FragmentToken794 =
  | FragmentSelf794["__typename"]
  | FragmentSelf794["typenameHint"] | FragmentToken792 | FragmentToken793;
