import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4871 } from "./fragment4871";
import type { FragmentToken4872 } from "./fragment4872";

export const FRAGMENT_4873 = gql(`
  fragment Fragment4873 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult4873 = ResultOf<typeof FRAGMENT_4873>;
type FragmentSelf4873 = NonNullable<FragmentResult4873>;

export type FragmentToken4873 =
  | FragmentSelf4873["__typename"]
  | FragmentSelf4873["typenameHint"] | FragmentToken4871 | FragmentToken4872;
