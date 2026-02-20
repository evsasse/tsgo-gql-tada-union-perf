import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4296 } from "./fragment4296";
import type { FragmentToken4297 } from "./fragment4297";

export const FRAGMENT_4298 = gql(`
  fragment Fragment4298 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult4298 = ResultOf<typeof FRAGMENT_4298>;
type FragmentSelf4298 = NonNullable<FragmentResult4298>;

export type FragmentToken4298 =
  | FragmentSelf4298["__typename"]
  | FragmentSelf4298["typenameHint"] | FragmentToken4296 | FragmentToken4297;
