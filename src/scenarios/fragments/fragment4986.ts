import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4984 } from "./fragment4984";
import type { FragmentToken4985 } from "./fragment4985";

export const FRAGMENT_4986 = gql(`
  fragment Fragment4986 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult4986 = ResultOf<typeof FRAGMENT_4986>;
type FragmentSelf4986 = NonNullable<FragmentResult4986>;

export type FragmentToken4986 =
  | FragmentSelf4986["__typename"]
  | FragmentSelf4986["typenameHint"] | FragmentToken4984 | FragmentToken4985;
