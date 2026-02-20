import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4812 } from "./fragment4812";
import type { FragmentToken4813 } from "./fragment4813";

export const FRAGMENT_4814 = gql(`
  fragment Fragment4814 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult4814 = ResultOf<typeof FRAGMENT_4814>;
type FragmentSelf4814 = NonNullable<FragmentResult4814>;

export type FragmentToken4814 =
  | FragmentSelf4814["__typename"]
  | FragmentSelf4814["typenameHint"] | FragmentToken4812 | FragmentToken4813;
