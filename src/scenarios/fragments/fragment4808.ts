import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4806 } from "./fragment4806";
import type { FragmentToken4807 } from "./fragment4807";

export const FRAGMENT_4808 = gql(`
  fragment Fragment4808 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult4808 = ResultOf<typeof FRAGMENT_4808>;
type FragmentSelf4808 = NonNullable<FragmentResult4808>;

export type FragmentToken4808 =
  | FragmentSelf4808["__typename"]
  | FragmentSelf4808["typenameHint"] | FragmentToken4806 | FragmentToken4807;
