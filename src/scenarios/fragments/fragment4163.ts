import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4161 } from "./fragment4161";
import type { FragmentToken4162 } from "./fragment4162";

export const FRAGMENT_4163 = gql(`
  fragment Fragment4163 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult4163 = ResultOf<typeof FRAGMENT_4163>;
type FragmentSelf4163 = NonNullable<FragmentResult4163>;

export type FragmentToken4163 =
  | FragmentSelf4163["__typename"]
  | FragmentSelf4163["typenameHint"] | FragmentToken4161 | FragmentToken4162;
