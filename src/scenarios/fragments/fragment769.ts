import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken767 } from "./fragment767";
import type { FragmentToken768 } from "./fragment768";

export const FRAGMENT_769 = gql(`
  fragment Fragment769 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult769 = ResultOf<typeof FRAGMENT_769>;
type FragmentSelf769 = NonNullable<FragmentResult769>;

export type FragmentToken769 =
  | FragmentSelf769["__typename"]
  | FragmentSelf769["typenameHint"] | FragmentToken767 | FragmentToken768;
