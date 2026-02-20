import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4182 } from "./fragment4182";
import type { FragmentToken4183 } from "./fragment4183";

export const FRAGMENT_4184 = gql(`
  fragment Fragment4184 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult4184 = ResultOf<typeof FRAGMENT_4184>;
type FragmentSelf4184 = NonNullable<FragmentResult4184>;

export type FragmentToken4184 =
  | FragmentSelf4184["__typename"]
  | FragmentSelf4184["typenameHint"] | FragmentToken4182 | FragmentToken4183;
