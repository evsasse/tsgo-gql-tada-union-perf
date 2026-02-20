import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4671 } from "./fragment4671";
import type { FragmentToken4672 } from "./fragment4672";

export const FRAGMENT_4673 = gql(`
  fragment Fragment4673 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult4673 = ResultOf<typeof FRAGMENT_4673>;
type FragmentSelf4673 = NonNullable<FragmentResult4673>;

export type FragmentToken4673 =
  | FragmentSelf4673["__typename"]
  | FragmentSelf4673["typenameHint"] | FragmentToken4671 | FragmentToken4672;
