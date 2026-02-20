import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4742 } from "./fragment4742";
import type { FragmentToken4743 } from "./fragment4743";

export const FRAGMENT_4744 = gql(`
  fragment Fragment4744 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult4744 = ResultOf<typeof FRAGMENT_4744>;
type FragmentSelf4744 = NonNullable<FragmentResult4744>;

export type FragmentToken4744 =
  | FragmentSelf4744["__typename"]
  | FragmentSelf4744["typenameHint"] | FragmentToken4742 | FragmentToken4743;
