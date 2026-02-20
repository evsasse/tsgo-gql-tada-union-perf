import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4673 } from "./fragment4673";
import type { FragmentToken4674 } from "./fragment4674";

export const FRAGMENT_4675 = gql(`
  fragment Fragment4675 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult4675 = ResultOf<typeof FRAGMENT_4675>;
type FragmentSelf4675 = NonNullable<FragmentResult4675>;

export type FragmentToken4675 =
  | FragmentSelf4675["__typename"]
  | FragmentSelf4675["typenameHint"] | FragmentToken4673 | FragmentToken4674;
