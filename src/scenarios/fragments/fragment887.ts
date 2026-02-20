import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken885 } from "./fragment885";
import type { FragmentToken886 } from "./fragment886";

export const FRAGMENT_887 = gql(`
  fragment Fragment887 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult887 = ResultOf<typeof FRAGMENT_887>;
type FragmentSelf887 = NonNullable<FragmentResult887>;

export type FragmentToken887 =
  | FragmentSelf887["__typename"]
  | FragmentSelf887["typenameHint"] | FragmentToken885 | FragmentToken886;
