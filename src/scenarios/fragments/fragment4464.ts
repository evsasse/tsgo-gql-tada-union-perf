import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4462 } from "./fragment4462";
import type { FragmentToken4463 } from "./fragment4463";

export const FRAGMENT_4464 = gql(`
  fragment Fragment4464 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult4464 = ResultOf<typeof FRAGMENT_4464>;
type FragmentSelf4464 = NonNullable<FragmentResult4464>;

export type FragmentToken4464 =
  | FragmentSelf4464["__typename"]
  | FragmentSelf4464["typenameHint"] | FragmentToken4462 | FragmentToken4463;
