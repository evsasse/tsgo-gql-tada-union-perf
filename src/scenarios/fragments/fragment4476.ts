import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4474 } from "./fragment4474";
import type { FragmentToken4475 } from "./fragment4475";

export const FRAGMENT_4476 = gql(`
  fragment Fragment4476 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult4476 = ResultOf<typeof FRAGMENT_4476>;
type FragmentSelf4476 = NonNullable<FragmentResult4476>;

export type FragmentToken4476 =
  | FragmentSelf4476["__typename"]
  | FragmentSelf4476["typenameHint"] | FragmentToken4474 | FragmentToken4475;
