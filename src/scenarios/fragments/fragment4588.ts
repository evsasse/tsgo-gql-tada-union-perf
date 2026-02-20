import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4586 } from "./fragment4586";
import type { FragmentToken4587 } from "./fragment4587";

export const FRAGMENT_4588 = gql(`
  fragment Fragment4588 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult4588 = ResultOf<typeof FRAGMENT_4588>;
type FragmentSelf4588 = NonNullable<FragmentResult4588>;

export type FragmentToken4588 =
  | FragmentSelf4588["__typename"]
  | FragmentSelf4588["typenameHint"] | FragmentToken4586 | FragmentToken4587;
