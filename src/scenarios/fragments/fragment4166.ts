import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4164 } from "./fragment4164";
import type { FragmentToken4165 } from "./fragment4165";

export const FRAGMENT_4166 = gql(`
  fragment Fragment4166 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult4166 = ResultOf<typeof FRAGMENT_4166>;
type FragmentSelf4166 = NonNullable<FragmentResult4166>;

export type FragmentToken4166 =
  | FragmentSelf4166["__typename"]
  | FragmentSelf4166["typenameHint"] | FragmentToken4164 | FragmentToken4165;
