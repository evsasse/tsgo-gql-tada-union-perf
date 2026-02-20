import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4890 } from "./fragment4890";
import type { FragmentToken4891 } from "./fragment4891";

export const FRAGMENT_4892 = gql(`
  fragment Fragment4892 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult4892 = ResultOf<typeof FRAGMENT_4892>;
type FragmentSelf4892 = NonNullable<FragmentResult4892>;

export type FragmentToken4892 =
  | FragmentSelf4892["__typename"]
  | FragmentSelf4892["typenameHint"] | FragmentToken4890 | FragmentToken4891;
