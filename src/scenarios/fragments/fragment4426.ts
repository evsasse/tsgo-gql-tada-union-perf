import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4424 } from "./fragment4424";
import type { FragmentToken4425 } from "./fragment4425";

export const FRAGMENT_4426 = gql(`
  fragment Fragment4426 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult4426 = ResultOf<typeof FRAGMENT_4426>;
type FragmentSelf4426 = NonNullable<FragmentResult4426>;

export type FragmentToken4426 =
  | FragmentSelf4426["__typename"]
  | FragmentSelf4426["typenameHint"] | FragmentToken4424 | FragmentToken4425;
