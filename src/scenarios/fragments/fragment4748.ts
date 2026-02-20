import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4746 } from "./fragment4746";
import type { FragmentToken4747 } from "./fragment4747";

export const FRAGMENT_4748 = gql(`
  fragment Fragment4748 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult4748 = ResultOf<typeof FRAGMENT_4748>;
type FragmentSelf4748 = NonNullable<FragmentResult4748>;

export type FragmentToken4748 =
  | FragmentSelf4748["__typename"]
  | FragmentSelf4748["typenameHint"] | FragmentToken4746 | FragmentToken4747;
