import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4906 } from "./fragment4906";
import type { FragmentToken4907 } from "./fragment4907";

export const FRAGMENT_4908 = gql(`
  fragment Fragment4908 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult4908 = ResultOf<typeof FRAGMENT_4908>;
type FragmentSelf4908 = NonNullable<FragmentResult4908>;

export type FragmentToken4908 =
  | FragmentSelf4908["__typename"]
  | FragmentSelf4908["typenameHint"] | FragmentToken4906 | FragmentToken4907;
