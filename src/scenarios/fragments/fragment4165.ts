import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4163 } from "./fragment4163";
import type { FragmentToken4164 } from "./fragment4164";

export const FRAGMENT_4165 = gql(`
  fragment Fragment4165 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult4165 = ResultOf<typeof FRAGMENT_4165>;
type FragmentSelf4165 = NonNullable<FragmentResult4165>;

export type FragmentToken4165 =
  | FragmentSelf4165["__typename"]
  | FragmentSelf4165["typenameHint"] | FragmentToken4163 | FragmentToken4164;
