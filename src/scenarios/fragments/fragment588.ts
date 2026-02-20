import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken586 } from "./fragment586";
import type { FragmentToken587 } from "./fragment587";

export const FRAGMENT_588 = gql(`
  fragment Fragment588 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult588 = ResultOf<typeof FRAGMENT_588>;
type FragmentSelf588 = NonNullable<FragmentResult588>;

export type FragmentToken588 =
  | FragmentSelf588["__typename"]
  | FragmentSelf588["typenameHint"] | FragmentToken586 | FragmentToken587;
